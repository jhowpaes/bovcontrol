import { CheckListProps } from "@modules/checklist/models/CheckListProps";

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootParamList {
      mainHome: { screen: string };
      home: undefined;
      mainChecklist: { screen: string, params?: { checklist?: CheckListProps | undefined}  };
      createAndUpdateChecklist: CheckListProps | undefined ;
    }
  }
}