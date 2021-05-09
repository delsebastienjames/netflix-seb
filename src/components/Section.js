const Section = ({ category, images }) => {
  //console.log(images);
  return (
    <div>
      {/* Catégories de films */}
      <p>{category}</p>
      {/*images*/}
      <div className="netflix">
        {images.map((url, index) => {
          return <img key={index} src={url} alt={url} />;
        })}
      </div>
    </div>
  );
};

export default Section;
