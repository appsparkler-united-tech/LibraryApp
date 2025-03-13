import ScrollAreaTitle from "../../components/ScrollArea/ScrollAreaTitleStorybook";
import TextInput from "../HomePage/components/TextInputComponent/TextInput";

const books = [
  {
    title: 'Book 1', description: 'A great book', imageSrc: '/books/mockingBird.png', buttonText: 'Read More',
    id: ''
},
{
    title: 'Book 2', description: 'Another amazing book', imageSrc: '/books/ringOfFire.png', buttonText: 'Read More',
    id: ''
},
{
    title: 'Book 3', description: 'A must-read', imageSrc: '/books/mockingBird.png', buttonText: 'Read More',
    id: ''
},
{
    title: 'Book 4', description: 'An exciting tale', imageSrc: '/books/mockingBird.png', buttonText: 'Read More',
    id: ''
},
{
    title: 'Book 5', description: 'A thrilling adventure', imageSrc: '/books/mockingBird.png', buttonText: 'Read More',
    id: ''
},
{
    title: 'Book 6', description: 'A fantastic read', imageSrc: '/books/mockingBird.png', buttonText: 'Read More',
    id: ''
},
{
    title: 'Book 7', description: 'A page-turner', imageSrc: '/books/mockingBird.png', buttonText: 'Read More',
    id: ''
},
{
    title: 'Book 8', description: 'An unforgettable story', imageSrc: '/books/mockingBird.png', buttonText: 'Read More',
    id: ''
}
];

const ScrollTitle: React.FC = () => {
  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center mb-4">
        <button className="btn btn-link btn-secondary text-pretty font-light text-sm">
          Back
        </button>
        <h1 className="text-md text-pretty ml-4">Title</h1>
      </div>

      {/* Input Field */}
      <div className="form-control w-full mb-4">
        <TextInput placeholder="Find Title" />
      </div>

      {/* Table Component */}
      <ScrollAreaTitle books={books} />
    </div>
  );
};

export default ScrollTitle;

