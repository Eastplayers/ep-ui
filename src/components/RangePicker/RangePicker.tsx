import dateFnsGenerateConfig from "rc-picker/lib/generate/dateFns";
import generatePicker from "antd/es/date-picker/generatePicker/generateRangePicker";
import "antd/es/date-picker/style/index";
// import "./DatePicker.scss";

const RangePicker = generatePicker<Date>(dateFnsGenerateConfig);

export default RangePicker;
