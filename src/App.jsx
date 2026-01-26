import './App.css'

function Header() {
  return (
    <div className="title">
      <h1>Data <span>Buku</span></h1>
      <p>Card React Buku Sederhana</p>
    </div>
  )
}

function Biodata(props) {
  return (
    <div className="card-siswa">
      <h2>{props.judul}</h2>
      <p>
        <strong>Penerbit:</strong> {props.penerbit}
      </p>
      <p>
        <strong>Tahun Terbit:</strong> {props.tahun}
      </p>
    </div>
  )
}

function App() {
  return (
    <main className="container">
      <Header />

      <div className="grid-books">
        <Biodata
          judul="Bumi (Series)"
          penerbit="Gramedia Pustaka Utama"
          tahun="2014"
        />
        <Biodata
          judul="Laskar Pelangi"
          penerbit="Bentang Pustaka"
          tahun="2005"
        />
        <Biodata
          judul="Hafalan Shalat Delisa"
          penerbit="Republika"
          tahun="2005"
        />
      </div>
    </main>
  )
}

export default App
