import './testimonials.scss'

export default function Testimonials() {

    const testimonialsSliderData = [
        {
            id: 1,
            name: "Alex Ferguson",
            title: "CEO of Manchester United",
            iconLeft: "https://img.freepik.com/free-psd/digital-marketing-facebook-banner-template_237398-233.jpg?size=626&ext=jpg",
            iconRight:"https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            description: "Lorem ipsum dolor sit amet assumenda soluta, repellat, aut ratione commodi dolores quod placeat",
            img:"https://site-cdn.givemesport.com/images/21/05/05/7379661c8dadd9c25c2573cb4992e6d0/1201.jpg",
            featured: false
        },
        {
            id: 2,
            name: "Peter Czeh",
            title: "Senior Dev",
            iconLeft: "https://img.freepik.com/free-psd/digital-marketing-facebook-banner-template_237398-233.jpg?size=626&ext=jpg",
            iconRight:"https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            description: "2 Lorem ipsum dolor sit amet consectetur elit. Necessitatibus, optio assumenda molestiae soluta",
            img:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            featured: true,
        },
        {
            id: 3,
            name: "Susan Thompson",
            title: "Project Manager",
            iconLeft: "https://img.freepik.com/free-psd/digital-marketing-facebook-banner-template_237398-233.jpg?size=626&ext=jpg",
            iconRight:"https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            description: "3 Lorem ipsum dolor elit. Necessi tatibus, optio assu menda mole stiae aut ratione commodi dolores quod placeat dolor",
            img:"https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            featured: false
        }
    ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                { testimonialsSliderData.map((sliderItem) =>( 
                <div className={ sliderItem.featured? "card featured" : "card" }>
                    <div className="top">
                        <img src={sliderItem.iconLeft} alt={sliderItem.name} className="left"/>
                        <img src={sliderItem.img} alt={sliderItem.name} className="user"/>
                        <img src={sliderItem.iconRight} alt="" className="right"/>
                    </div>
                    <div className="center">
                        { sliderItem.description }
                    </div>
                    <div className="bottom">
                        <h3>{sliderItem.name}</h3>
                        <h4>{ sliderItem.title }</h4>
                    </div>
                </div>
                 ))} 
            </div>
        </div>
    )
}
