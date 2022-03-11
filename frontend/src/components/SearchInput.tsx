const SearchInput = () => {
  return (
    <div>
      <input type="search" name="user" id="user" placeholder="Search users" />

      <style jsx>{`
        input {
          color: black;
        }
      `}</style>
    </div>
  )
}
export default SearchInput
