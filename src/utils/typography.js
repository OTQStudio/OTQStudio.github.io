import Typography from "typography"

const typography = new Typography({
  baseFontSize: "14px",
  baseLineHeight: 2.0,
  headerFontFamily: [
    "Poppins",
    //"Lato",
    "Gill Sans",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: [ "Poppins", "Gill Sans", "Lato", "Arial", "sans-serif"],
  overrideStyles:(options, styles) => ({
    ".profile>p": {
      fontSize: '14px',
    },
    ".profile>.flex>div>strong": {
      fontSize: '18px',
    },
    "#about>h2": {
      fontSize: '30px',
    },
    ".snsAccounts>li>a": {
      fontSize: '15px'
    },
    ".siteTitle>a": {
      fontWidht: 800,
    },
    "article>a>.info": {
      fontWidht: 800,
      fontSize: '16px',
      textAlign: 'center',
    },
    a: {
      color: "black",
    },
  })
})

export default typography
