interface CButtonProps {
  label: string;
}

const CButton: React.FC<CButtonProps> = ({ label }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
      {label}
    </button>
  );
};

export default CButton;
