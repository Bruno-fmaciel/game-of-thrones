import "styled-components";
import { padrao, stark, lannister, tyrell, targaryen, baratheon, martell } from "@/app/styles/theme";

type ThemeType = typeof padrao;

declare module "styled-components" {
    export interface DeafaultTheme extends ThemeType{}
}