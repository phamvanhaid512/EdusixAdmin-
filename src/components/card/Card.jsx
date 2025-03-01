const Card = (props) => {
  const { Icon, title, content } = props;
  return (
    <div className="w-full p-6 bg-white border-2 rounded-lg whitespace-nowrap shadow-sm">
      <div className="flex items-start justify-between pb-6">
        <div className="">{Icon && <Icon></Icon>}</div>
      </div>
      <div className="">
        {title && (
          <div className="mb-2 text-base font-medium text-gray-500">
            {title}
          </div>
        )}
        <div className="flex items-center text-2xl font-medium whitespace-nowrap">
          {content && <div className="">{content}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
