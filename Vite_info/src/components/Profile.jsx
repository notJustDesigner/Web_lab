import '../App.css';
const user = {
    name: 'Pickachu',
    imageUrl: 'pikachu.jpg',// for files in the public folder you can write the file name as a path
    imageSize: 90,
  };
  
/**
 * Renders a user profile with a name and a profile image.
 * The image is styled as a square with dimensions specified by the user object.
 */
  export default function Profile() {
    // Destructure properties from the user object
    const { name, imageUrl, imageSize } = user;
    return (
      <>
        <h1>{name}</h1>
        <img
          className="avatar"
          src={imageUrl}
          alt={'Photo of ' + name}
          style={{
            width: imageSize,
            height: imageSize
          }}
        />
      </>
    );
  }
  