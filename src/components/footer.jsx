
export function Footer(){
  const currentYear = new Date().getFullYear();
  return <footer>
    <p>Copyright &#64; {currentYear}</p>
  </footer>
}