import { CheckListProps } from "@modules/checklist/models/CheckListProps";

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootParamList {
      mainHome: { screen: string };
      home: undefined;
      mainChecklist: { screen: string, params: CheckListProps | undefined  };
      createAndUpdateChecklist: { checklist: CheckListProps | undefined };
    }
  }
}