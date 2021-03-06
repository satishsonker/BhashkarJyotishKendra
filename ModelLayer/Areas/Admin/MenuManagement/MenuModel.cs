﻿using ShuklaJi.ModelLayer.Common;

namespace ModelLayer.Areas.Admin.MenuManagement
{
    public class MenuModel:CommonPropertyModel
    {
        public string ParentMenu { get; set; }
        public string ParentMenuName { get; set; }
        public int? ParentMenuId { get; set; }
        public int? MenuId { get; set; }
        public string MenuName { get; set; }
        public string Badge { get; set; }
        public string MenuPath { get; set; }
        public string IconClass { get; set; }
        public string AccessBy { get; set; }
        public string IconColor { get; set; }
        public string DisplayName { get; set; }
        public int DisplayOrder { get; set; }
        public string Position { get; set; }
    }
}
