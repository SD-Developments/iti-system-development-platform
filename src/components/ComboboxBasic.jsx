import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from './ui/combobox';

function ComboboxBasic({ items, data, setData, placeholder }) {
  return (
    <>
      <Combobox
        onValueChange={(e) => {
          setData(e);
        }}
        items={items}
        value={data}
      >
        <ComboboxInput className="w-full h-full rounded-xl" placeholder={placeholder} />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </>
  );
}

export default ComboboxBasic;
