function Question() {
  return (
    <div className="flex justify-center items-center h-[92vh]">
      <div className="flex flex-col gap-3 justify-start bg-neutral-800 w-1/2 h-1/2 p-6">
        <p className="mb-2">Question 1 of 5</p>
        <h2>Web pages are written using?</h2>
        <p className=" hover:bg-[#2f2f2f] p-2 cursor-pointer">A. FTP</p>
        <p className=" hover:bg-[#2f2f2f] p-2 cursor-pointer">B. UML</p>
        <p className=" hover:bg-[#2f2f2f] p-2 cursor-pointer">C. HTML</p>
        <p className=" hover:bg-[#2f2f2f] p-2 cursor-pointer">D. URL</p>
      </div>
    </div>
  );
}

export default Question;
