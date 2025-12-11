'use client'
import Image from "next/image"
import styles from '../button.module.css'

function ErrorPage({error, reset}) {
  return (
    <div>
        Product Error....

        <Image
            src = {'https://cdn.vectorstock.com/i/preview-1x/04/60/cat-error-page-asleep-kitten-in-box-with-404-sign-vector-45320460.jpg'}
            width = {500}
            height={350}
            alt = {'error img'}
        ></Image>

        <button
            onclick = {() => reset()}
            className = {`${styles.button}`}
        >
            Reset
        </button>
    </div>
  )
}

export default ErrorPage