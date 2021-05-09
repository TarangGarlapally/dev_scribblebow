import Header from '../components/Header'
import Menu from '../components/Menu'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return <>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" 
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" 
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" 
  crossOrigin="anonymous" />
  
  <script 
  src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" 
  integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" 
  crossOrigin="anonymous" />
  </head>


  <div>
    <Header />
    <div className={styles.homeGrid}>
    <Menu />
    <div  className={styles.content}>
    <Component {...pageProps} />
    </div>
    </div>
  </div>
  </>
}

export default MyApp
