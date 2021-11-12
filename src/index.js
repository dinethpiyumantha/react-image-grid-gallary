// Libraies
import React from 'react'

// External stylesheets
import './styles.module.css'

// Assets
import ZoomIcon from 'zoom.svg'

/**
 * GalleryGrid class for cover child components
 * It helps to create a image grid
 */
export default class GalleryGrid extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cols: ''
    }
  }

  render() {
    // Create grid column style for css
    let gridColumnStyle = ''
    for (let i = 0; i < this.props.cols; i++) {
      gridColumnStyle += 'auto '
    }

    // Calculate container width for grid
    let gridContainerWidth = this.props.cols * 250

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: gridColumnStyle,
          width: gridContainerWidth + 'px'
        }}
      >
        {/* Provide space to child componets in here */}
        {this.props.children}
      </div>
    )
  }
}

/**
 * GalleryImage class is single image card
 */
export class GalleryImage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      src: null,
      title: '',
      fullScreen: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((prevState) => ({
      fullScreen: !this.state.fullScreen
    }))
    console.log('You clicked ' + this.state.title)
  }

  render() {
    return (
      <div>
        {/* Image Thumbnail card */}
        <div
          className='image-grid-card'
          style={{ backgroundImage: 'url(' + this.props.src + ')' }} // Image source provide to here
          onClick={this.handleClick}
        >
          {/* Image thumbnail title */}
          <div className='image-grid-card-title'>
            <p
              style={{
                textOverflow: 'ellipsis',
                height: '20px',
                margin: '0px',
                width: '230px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                color: '#fff'
              }}
            >
              {/* Image title render at here */}
              { this.props.title }
            </p>
          </div>

          {/* Background overlay animation */}
          <div className='overflow-back'>
            <img
              src={ZoomIcon} // Zoom icon source provide to here
              style={{
                width: '50px',
                transform: 'translate(-50%, -50%)',
                marginTop: '75px',
                marginLeft: '125px'
              }}
            />
          </div>
        </div>{' '}
        {this.state.fullScreen && (
          <div
            style={{
              backgroundColor: '#000000cc',
              width: '100vw',
              height: '100vh',
              position: 'fixed',
              transform: 'translate(-50%, -50%)',
              left: '50%',
              top: '50%',
              zIndex: 99999
            }}
            className="fade-in"
            onClick={this.handleClick}
          >
            <img
              src={this.props.src}
              style={{
                height: '70vh',
                position: 'fixed',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                boxShadow: '0px 0px 20px 0px #000000'
              }}
            />
            <small
              style={{
                color: '#fff',
                position: 'fixed',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                bottom: 'calc(50% - 260px)',
                backgroundColor: '#000000cc',
                borderRadius: '100px',
                padding: '5px 10px'
              }}
            >
              {this.props.title}
            </small>
          </div>
        )}
      </div>
    )
  }
}


/**
 * 
 */
export class GalleryImageList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <GalleryGrid cols={this.props.cols} >
        {
          this.props.imageList.map((image) => <GalleryImage src={image.src} title={image.title} />)
        }
      </GalleryGrid>
    )
  }

}