const data = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reiciendis reprehenderit quis nesciunt obcaecati, minima blanditiis nisi consequatur nihil non debitis dolorem delectus excepturi perferendis amet ab aliquam, iusto neque?"
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reiciendis reprehenderit quis nesciunt obcaecati, minima blanditiis nisi consequatur nihil non debitis dolorem delectus excepturi perferendis amet ab aliquam, iusto neque?"
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reiciendis reprehenderit quis nesciunt obcaecati, minima blanditiis nisi consequatur nihil non debitis dolorem delectus excepturi perferendis amet ab aliquam, iusto neque?"
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reiciendis reprehenderit quis nesciunt obcaecati, minima blanditiis nisi consequatur nihil non debitis dolorem delectus excepturi perferendis amet ab aliquam, iusto neque?"
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reiciendis reprehenderit quis nesciunt obcaecati, minima blanditiis nisi consequatur nihil non debitis dolorem delectus excepturi perferendis amet ab aliquam, iusto neque?"
    },
    {
        id: 6,
        title: "Lorem ipsum dolor sit amet.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reiciendis reprehenderit quis nesciunt obcaecati, minima blanditiis nisi consequatur nihil non debitis dolorem delectus excepturi perferendis amet ab aliquam, iusto neque?"
    },
]


const Faq = () => {
    return (
        <div className="faq">
            <h3>Frequently Asked Questions</h3>

                {data.map(({id, title, description})=>{
                    return(
                        <div key={id} className="question" >
                            <p><strong>{title}</strong></p>
                            <p>{description}</p>
                        </div>
                        
                    )
                })}

        </div>
    )
}
export default Faq