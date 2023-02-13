function Footer() {
  return (
    <footer className="flex flex-col h-24 bg-footer-gradient justify-center">
      <div className="flex justify-center">
        <img className="mr-4" src="./vite.svg" alt="Vite" />
        <span>+</span>
        <img className="ml-4 animate-spin-slow" src="./react.svg" alt="Vite" />
      </div>
    </footer>
  )
}

export default Footer