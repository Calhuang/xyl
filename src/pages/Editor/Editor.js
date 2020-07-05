import React, { useState, useRef } from 'react';
import './Editor.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ExifReader from 'exifreader';
import { useForm } from 'react-hook-form';
import { CREATE_POST } from 'gql/post'
import { useMutation } from "@apollo/react-hooks";
import CircularProgress from '@material-ui/core/CircularProgress';

const axios = require('axios')

function Editor() {
  const [image, setImage] = useState(null)
  const [imageThumb, setImageThumb] = useState(null)
  const [title, setTitle] = useState('Untitled')
  const [desc, setDesc] = useState('No description.')
  const [exif, setExif] = useState(null)
  const [loading, setLoading] = useState(false)
  const inputFileRef = useRef(null);
  const formRef = useRef(null);

  const { register, errors, handleSubmit } = useForm();

  // -- graphql CALLBACKS
  const afterCreate = () => {
    setLoading(false)
    // clear data
    formRef.current.reset()
    setTitle('Untitled')
    setExif(null)
    setDesc('N/A')
    setImage(null)
    setImageThumb(null)
  }

  // -- graphql MUTATIONS
  const [createPost] = useMutation(CREATE_POST, {
    onCompleted: afterCreate,
  })

  const onSubmit = async (data) => {
    if (image && exif && title && desc) {
      // toggle loading
      setLoading(true)
      // submit api
      // cloudinary upload
      const url = process.env.REACT_APP_CLOUDINARY_URL
      // Initial FormData
      const formData = new FormData()
      formData.append('file', image)
      formData.append('tags', `xyl`)
      formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET)
      formData.append('api_key', process.env.REACT_APP_CLOUDINARY_KEY)
      formData.append('timestamp', (Date.now() / 1000) | 0)
      const uploaded = await axios.post(url, formData)
      // upload to server
      createPost({
        variables: {
          body: desc,
          image: uploaded.data.secure_url,
          title: title,
          exif: exif
        }
      })
    }
  }

  const fileHandler = (e) => {
    e.preventDefault()

    setImage(e.target.files[0])
    setImageThumb(URL.createObjectURL(e.target.files[0]))

    const files = e.target.files

    const reader = new FileReader()

    reader.onload = function (readerEvent) {
      try {
        const tags = ExifReader.load(readerEvent.target.result)

        // The MakerNote tag can be really large. Remove it to lower
        // memory usage if you're parsing a lot of files and saving the
        // tags.
        delete tags['MakerNote']
        setExif(JSON.stringify(tags))
      } catch (error) {
        alert(error.toString())
      }
    }

    reader.readAsArrayBuffer(files[0])
  }

  const handleUploadClick = (e) => {
    e.preventDefault()
    inputFileRef.current.click()
  }

  return (
    <div className="editor shadow-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
      >
        <div className="editor-form">
          <input
            accept="image/*"
            id="img-upload"
            ref={inputFileRef}
            style={{display: 'none'}}
            type="file"
            onChange={fileHandler}
          />
          {(!image) ? 
            <Button
              variant="contained"
              color="default"
              onClick={handleUploadClick}
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button> : 
            <div>
              <img className="uploaded-thumb" src={imageThumb} alt="imageThumb"/>
            </div>
          }
          <br/>
          <TextField
            label="Title"
            name="title"
            variant="outlined"
            inputRef={register()}
            onChange={event => setTitle(event.target.value)}
          />
          <div className="error-message">{errors.title && 'Title is required'}</div>
          <br/>
          <TextField
            label="Description"
            name="description"
            variant="outlined"
            rows={10}
            multiline
            inputRef={register()}
            onChange={event => setDesc(event.target.value)}
          />
          <div className="error-message">{errors.description && 'Description is required'}</div>
          <br/>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
          >
            {loading ? <CircularProgress /> : 'Submit'}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Editor;
