import { CategoryCard } from "./CategoryCard";
export function Category() {
    return (
        <ul className="category">
            <CategoryCard clas="pc">
                {{
                    title: "Ноутбуки",
                    src: "../public/1bf1fccc9c545cd0630343dd94e75322.png",
                    alt: "Notebook",
                    link: "#",
                }}
            </CategoryCard>
            <CategoryCard clas="smart">
                {{
                    title: "Смартфоны",
                    src: "../public/01 1.png",
                    alt: "smart",
                    link: "#",
                }}
            </CategoryCard>
            <CategoryCard clas="tv">
                {{
                    title: "Телевизоры",
                    src: "../public/uz-ru-qled-qn85b-qe75qn85bauxce-thumb-534034625 1.png",
                    alt: "tv",
                    link: "#",
                }}
            </CategoryCard>
            <CategoryCard clas="acsus">
                {{
                    title: "Электроника",
                    src: "../public/c192951b863daa9b6f2ca9866c21b755 1.png",
                    alt: "Notebook",
                    link: "#",
                }}
            </CategoryCard>
            <CategoryCard clas="smart">
                {{
                    title: "Смартфоны",
                    src: "../public/01 1.png",
                    alt: "smart",
                    link: "#",
                }}
            </CategoryCard>
            <CategoryCard clas="pc">
                {{
                    title: "Ноутбуки",
                    src: "../public/1bf1fccc9c545cd0630343dd94e75322.png",
                    alt: "Notebook",
                    link: "#",
                }}
            </CategoryCard>
            <CategoryCard clas="acsus">
                {{
                    title: "Электроника",
                    src: "../public/c192951b863daa9b6f2ca9866c21b755 1.png",
                    alt: "Notebook",
                    link: "#",
                }}
            </CategoryCard>
            <CategoryCard clas="tv">
                {{
                    title: "Телевизоры",
                    src: "../public/uz-ru-qled-qn85b-qe75qn85bauxce-thumb-534034625 1.png",
                    alt: "tv",
                    link: "#",
                }}
            </CategoryCard>
        </ul>
    );
}
