import { Input } from "antd";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import colors from "~constants/colors";
import { Trans } from "~translation";
import Icon from "../Icon";

interface SearchProps {
  placeholder?: string;
}

// TODO: Able to enable/disable border color
const Search: FC<SearchProps> = ({ placeholder = Trans.search }) => {
  const { t } = useTranslation();

  return (
    <div>
      <Input
        placeholder={t(placeholder)}
        suffix={<Icon icon="search" size={24} color={colors.GRAY_60} />}
      />
    </div>
  );
};

export default Search;
