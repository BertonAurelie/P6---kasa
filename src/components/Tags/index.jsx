

function tags (props) {
    const sectionOfArray = props.sectionOfArray

    return (
        <>
            <ul>
                {sectionOfArray.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </>
    )
}

export default tags