import notebook from "../Notebook/Notebook";
import Notebook from "../Notebook/Notebook";

const notebooks = [
    {
        id:1,
        brand: 'Apple',
        model: 'Pro',
        cost: 100,
        img: 'https://tehnoobzor.com/uploads/posts/2017-05/1493840568_obzor-mi-notebook-air-lenovo-air-pro-i-macbook-pro.jpg'
    },
    {
        id:2,
        brand: 'HP',
        model: '15s',
        cost: 1000,
        img: 'https://img.moyo.ua/img/gallery/4952/73/1194937_middle.jpg'
    },
    {
        id:3,
        brand: 'ASUS',
        model: 'S15',
        cost: 1500,
        img: 'https://www.notebookcheck-ru.com/uploads/tx_nbc2/ASUSVivoBookS15-S532FL__1__02.JPG'
    },
    {
        id:4,
        brand: 'Lenovo',
        model: 'IdeaPad',
        cost: 50,
        img: 'https://www.notebookcheck-ru.com/typo3temp/_processed_/e/3/csm_2003588668_9229916e0b.jpg'
    }
]

const Notebooks = () => {
    return (
        <div>
            {notebooks.map(notebook=><Notebook notebook={notebook}/>)}
        </div>
    );
};

export default Notebooks;
