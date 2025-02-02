import { createStackNavigator } from "react-navigation";
import GoalScreen from "./GoalScreen";
import {
  CONDITION_SCREEN,
  GOAL_SCREEN,
  FAMILIARITY_SCREEN,
  NOTIFICATION_SCREEN,
  CHECKUP_PROMPT_SCREEN,
  WELCOME_SCREEN,
} from "./screens";
import ConditionScreen from "./ConditionScreen";
import FamiliarityScreen from "./FamiliarityScreen";
import NotificationScreen from "./NotificationScreen";
import CheckupPromptScreen from "./CheckupPromptScreen";
import WelcomeScreen from "./WelcomeScreen";

export default createStackNavigator(
  {
    [GOAL_SCREEN]: GoalScreen,
    [CONDITION_SCREEN]: ConditionScreen,
    [FAMILIARITY_SCREEN]: FamiliarityScreen,
    [NOTIFICATION_SCREEN]: NotificationScreen,
    [CHECKUP_PROMPT_SCREEN]: CheckupPromptScreen,
    [WELCOME_SCREEN]: WelcomeScreen,
  },
  {
    initialRouteName: WELCOME_SCREEN,
  }
);
