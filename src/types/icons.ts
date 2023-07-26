import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { TMuiIcon } from "./common";

/**
 * @method type TIconsList
 */
export type TIconsList = Record<
  string,
  OverridableComponent<SvgIconTypeMap<unknown, "svg">> & { muiName: string }
>;
/**
 * @method type TItemListIcon
 */
 export type TItemListIcon = [string, TMuiIcon];

 /**
  * @method type TBoxIconsProps
  */
 export type TBoxIconsProps = {
   iconList: Record<string, TIconsList>;
   iconListArray: TItemListIcon[];
   handleCheckIcon: (keyIcon: string) => typeof keyIcon | void;
   defaultIconName?: string;
   boxLabel?: string;
 };
 