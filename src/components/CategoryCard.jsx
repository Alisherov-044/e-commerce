export function CategoryCard(props) {
    return (
        <li>
            {/* <Link to="/"> */}
            <a
                href={props.children.link}
                className={`category__card--` + props.clas + " category__card"}
            >
                <h3>{props.children.title}</h3>
                <img
                    className={`category__img--` + props.clas}
                    src={props.children.src}
                    alt={props.children.alt}
                />
                {/* </Link> */}
            </a>
        </li>
    );
}
