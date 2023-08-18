interface Props{
    children: string
}

function TestComponent({children}: Props) {
  return (
    <div>
        <h1>{children}</h1>
    </div>
  )
}

export default TestComponent