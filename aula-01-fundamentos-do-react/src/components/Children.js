const Children = ({children}) => {
    return(
        <>
            <div>
                <p>O conteúdo abaixo está sendo recebido através de "children"</p>
                {children}
            </div>
        </>
    )
}

export default Children