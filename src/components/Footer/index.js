import './Fotter.css'

const Footer = () => {
  return(
    <footer className='footer'>
      <section>
      <ul>
        <li>
          <a href='https://www.facebook.com' target='_blank'>
            <img src='./imagens/fb.png' alt='imagem do Facebook'/>
          </a>
        </li>

        <li>
          <a href='https://www.x.com/juliocoi'>
            <img src="./imagens/tw.png" alt='imagem do X'/>
          </a>
        </li>

        <li>
          <a href='https://www.instagram.com/juliocoi'>
            <img src='./imagens/ig.png' alt='imagem do Instagram'/>
          </a>
        </li>
      </ul>

      </section>

      <section>
        <img src='./imagens/logo.png' alt='Logo do Organo'/>
      </section>
      
      <section>
        <p className='paragrafo'>Desenvolvido por Jcoi</p>
      </section>
    </footer>
  )
}

export default Footer;