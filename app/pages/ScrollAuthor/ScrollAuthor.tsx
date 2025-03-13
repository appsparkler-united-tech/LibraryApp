import ScrollAreaAuthor from "../../components/ScrollArea/ScrollAreaAuthorStorybook";
import TextInput from "../HomePage/components/TextInputComponent/TextInput";

const ScrollAuthor: React.FC = () => {
  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center mb-4">
        <button className="btn btn-link btn-secondary text-pretty font-light text-sm">
          Back
        </button>
        <h1 className="text-md text-pretty ml-4">Author</h1>
      </div>

      {/* Input Field */}
      <div className="form-control w-full mb-4">
        <TextInput placeholder="Find Author" />
      </div>

      {/* Table Component */}
      <ScrollAreaAuthor />
    </div>
  );
};

export default ScrollAuthor;

