export class Helper {
  static updateObjectInArray(array: any[], action: any) {
    return array.map((item: any, index: number) => {
      if (index !== action.index) {
        // This isn't the item we care about - keep it as-is
        return item;
      }

      // Otherwise, this is the one we want - return an updated value
      return {
        ...item,
        ...action.item,
      };
    });
  }
}
