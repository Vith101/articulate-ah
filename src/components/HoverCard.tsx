export const HoverCard: React.FC<{ title: string; className?: string; imageLink?: string; body?: string}> = ({ title, className, imageLink, body}) => (
  <div className={"bg-pink-950 text-white p-6 shadow rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100" + className} >
    {imageLink && <img
      src={imageLink}
      alt={`${typeof title === 'string' ? title : 'Delivery step'} illustration`}
      className="max-w-full h-auto"
    />}
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    {body && <p className="text-md mb-2"> {body} </p>}
  </div>
);
