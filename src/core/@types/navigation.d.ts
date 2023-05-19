import { IChecklist } from "@modules/checklist/interfaces/IChecklist";

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootParamList {
      mainHome: { screen: string };
      home: undefined;
      mainChecklist: { screen: string, params?: { checklist?: CheckListProps | undefined}  };
      createChecklist: undefined ;
      updateChecklist: { checklist: IChecklist };
      detailsChecklist: { checklist: IChecklist };
    }
  }
}