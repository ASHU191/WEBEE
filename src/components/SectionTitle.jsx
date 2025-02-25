const SectionTitle = ({ title, classes }) => {
    return (
      <h3 className={`text-[5vw] font-extrabold leading-[100%] md:text-[7vw] md:text-center ${classes}`}>
        {title}
      </h3>
    );
  };
  export default SectionTitle;
