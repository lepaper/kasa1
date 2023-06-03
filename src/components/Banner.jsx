import "../styles/components/Banner.scss"

function Banner({ source, altText, home }) {
  return (
    <div className="img-container">
      {home ? (
        <>
          <img src={source} alt={altText} id="banner-img"></img>
          <h1>Chez vous, partout et ailleurs</h1>
        </>
      ) : (
        <picture>
          <img src={source} alt="Logo de Kasa" />
        </picture>
      )}
    </div>
  )
}

export default Banner