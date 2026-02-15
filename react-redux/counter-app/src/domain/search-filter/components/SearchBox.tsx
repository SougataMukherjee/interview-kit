interface Props {
  onSearch: (value: string) => void;
}

export const SearchBox = ({ onSearch }: Props) => (
  <input
    placeholder="Search..."
    onChange={e => onSearch(e.target.value)}
  />
);
