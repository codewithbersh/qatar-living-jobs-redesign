"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterProps {
  options: string[];
  valueKey: string;
  selectPlaceholder: string;
}
export const Filter = ({
  options,
  valueKey,
  selectPlaceholder,
}: FilterProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentValue = searchParams.get(valueKey);

  const onSelect = (value: string) => {
    const currentQueryStrings = qs.parse(searchParams.toString());

    const query = {
      ...currentQueryStrings,
      [valueKey]: value,
    };

    if (currentQueryStrings[valueKey] === value) {
      query[value] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query,
      },
      {
        skipEmptyString: true,
        skipNull: true,
      },
    );

    router.push(url);
  };
  return (
    <Select
      onValueChange={(value) => onSelect(value)}
      value={currentValue || ""}
    >
      <SelectTrigger>
        <SelectValue placeholder={selectPlaceholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem value={option} key={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
