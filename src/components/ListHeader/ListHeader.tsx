import { Button, Checkbox, Popover } from "antd";
import { FC, Fragment, ReactNode } from "react";
import Flex from "../Flex";
import Icon from "../Icon";
import Search from "../Search";
import "./ListHeader.scss";

interface ListHeaderProps {
  leftActions?: ReactNode[];
  rightActions?: ReactNode[];
  showSearch?: boolean;
  showEditColumns?: boolean;
  onSearch?: (value: string) => void;
}

const ListHeader: FC<ListHeaderProps> = ({
  leftActions,
  rightActions,
  showSearch,
  showEditColumns,
  onSearch,
}) => {
  return (
    <Flex align="center" justify="between">
      {leftActions && (
        <Flex gap={3} align="center" justify="between">
          {leftActions.map((action, index) => (
            <Fragment key={`l-${index}`}>{action}</Fragment>
          ))}
        </Flex>
      )}
      <Flex gap={3} align="center" justify="between">
        {showEditColumns && (
          <Popover
            placement="bottom"
            showArrow={false}
            trigger="click"
            content={
              <Flex col gap={3}>
                {/* TODO: Separate to component */}
                <Search />
                <div>
                  <div>Show all properties</div>
                </div>
                <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto">
                  <Checkbox>Updated at</Checkbox>
                  <Checkbox>Country</Checkbox>
                  <Checkbox>Phone number</Checkbox>
                  <Checkbox>Name</Checkbox>
                  <Checkbox>External ID</Checkbox>
                </div>
                <Button type="primary">Select 6</Button>
              </Flex>
            }
          >
            <Button
              size="large"
              type="text"
              icon={<Icon className="mr-2" icon="edit" size={24} />}
            >
              Edit Columns
            </Button>
          </Popover>
        )}
        {rightActions &&
          rightActions.map((action, index) => (
            <Fragment key={`r-${index}`}>{action}</Fragment>
          ))}

        {showSearch && <Search />}
      </Flex>
    </Flex>
  );
};

export default ListHeader;
