
function Aboutlayout({children}) {
  return (
    <>
        {children}
        <div
            className = 'grid grid-cols-2 gap-x-2 m-2 p-2 text-xl text-white'
        >
            <button
                className='px-5 bg-emerald-600 rounded-md'
            >About Me</button>
            <button
                className='px-5 bg-emerald-600 rounded-md'
            >About You</button>
        </div>
    </>
  )
}

export default Aboutlayout