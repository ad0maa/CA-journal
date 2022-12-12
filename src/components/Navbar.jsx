import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-primary bg-gradient">
    <div class="container-fluid">
        <a class="navbar-brand text-light" href="/" >Journal</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ">
            <li class="nav-item ">
            <a class="nav-link active text-light" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-light" href="/category">Select Category</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-light" href="/entry/new">New Entry</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar