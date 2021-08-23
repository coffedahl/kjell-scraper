const Header = () => {
  return (
    <header>
      <img
        src="data:image/png;base64,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"
        alt="Logo"
      />
    </header>
  );
};

export default Header;