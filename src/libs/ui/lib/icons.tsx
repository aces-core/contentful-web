"use client";

import React from "react";
import { IconProps as MuiIconProps } from "@mui/material/Icon";
import {
  AccessTime as AccessTimeIcon,
  AccessTimeFilled as AccessTimeFilledIcon,
  Accessibility as AccessibilityIcon,
  AccountBalance as AccountBalanceIcon,
  AccountCircle as AccountCircleIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  Add as AddIcon,
  AddCard as AddCardIcon,
  AddCircle as AddCircleIcon,
  AddCircleOutline as AddCircleOutlineIcon,
  Alarm as AlarmIcon,
  AlarmOff as AlarmOffIcon,
  Apps as AppsIcon,
  ArrowBack as ArrowBackIcon,
  ArrowCircleDown as ArrowCircleDownIcon,
  ArrowCircleUp as ArrowCircleUpIcon,
  ArrowCircleLeft as ArrowCircleLeftIcon,
  ArrowCircleRight as ArrowCircleRightIcon,
  ArrowDropDown as ArrowDropDownIcon,
  ArrowDropUp as ArrowDropUpIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
  ArrowForward as ArrowForwardIcon,
  AttachFile as AttachFileIcon,
  Block as BlockIcon,
  CalendarMonth as CalendarMonthIcon,
  CalendarToday as CalendarTodayIcon,
  Cancel as CancelIcon,
  Check as CheckIcon,
  CheckBox as CheckBoxIcon,
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  CheckCircle as CheckCircleIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Close as CloseIcon,
  Comment as CommentIcon,
  ContentCopy as ContentCopyIcon,
  Create as CreateIcon,
  Delete as DeleteIcon,
  DeleteOutline as DeleteOutlineIcon,
  Discount as DiscountIcon,
  Download as DownloadIcon,
  DownloadDone as DownloadDoneIcon,
  Edit as EditIcon,
  Event as EventIcon,
  EventAvailable as EventAvailableIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  Facebook as FacebookIcon,
  FacebookOutlined as FacebookOutlinedIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Group as GroupIcon,
  Help as HelpIcon,
  HelpOutline as HelpOutlineIcon,
  History as HistoryIcon,
  Home as HomeIcon,
  Image as ImageIcon,
  Info as InfoIcon,
  InfoOutlined as InfoOutlinedIcon,
  Instagram as InstagramIcon,
  Language as LanguageIcon,
  LinkedIn as LinkedInIcon,
  LocalGroceryStore as LocalGroceryStoreIcon,
  LocalGroceryStoreOutlined as LocalGroceryStoreOutlinedIcon,
  LocalOffer as LocalOfferIcon,
  LocalOfferOutlined as LocalOfferOutlinedIcon,
  Lock as LockIcon,
  LockOpen as LockOpenIcon,
  Logout as LogoutIcon,
  Loop as LoopIcon,
  Mail as MailIcon,
  MailOutline as MailOutlineIcon,
  Map as MapIcon,
  Menu as MenuIcon,
  MoreHoriz as MoreHorizIcon,
  MoreVert as MoreVertIcon,
  Notifications as NotificationsIcon,
  NotificationsActive as NotificationsActiveIcon,
  NotificationsNone as NotificationsNoneIcon,
  NotificationsOff as NotificationsOffIcon,
  NotificationsPaused as NotificationsPausedIcon,
  OpenInNew as OpenInNewIcon,
  Payment as PaymentIcon,
  PaymentOutlined as PaymentOutlinedIcon,
  Person as PersonIcon,
  PersonAdd as PersonAddIcon,
  PersonOutline as PersonOutlineIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  PersonPin as PersonPinIcon,
  PersonPinOutlined as PersonPinOutlinedIcon,
  PinDrop as PinDropIcon,
  PinDropOutlined as PinDropOutlinedIcon,
  Place as PlaceIcon,
  PlaceOutlined as PlaceOutlinedIcon,
  PlayArrow as PlayArrowIcon,
  PlayCircle as PlayCircleIcon,
  Print as PrintIcon,
  PrintOutlined as PrintOutlinedIcon,
  Public as PublicIcon,
  PublicOutlined as PublicOutlinedIcon,
  Refresh as RefreshIcon,
  Remove as RemoveIcon,
  RemoveCircle as RemoveCircleIcon,
  Report as ReportIcon,
  ReportProblem as ReportProblemIcon,
  ReportProblemOutlined as ReportProblemOutlinedIcon,
  Save as SaveIcon,
  Schedule as ScheduleIcon,
  Search as SearchIcon,
  Send as SendIcon,
  Settings as SettingsIcon,
  Share as ShareIcon,
  ShoppingCart as ShoppingCartIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
  Sort as SortIcon,
  SortByAlpha as SortByAlphaIcon,
  SortByAlphaOutlined as SortByAlphaOutlinedIcon,
  SortOutlined as SortOutlinedIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  StarHalf as StarHalfIcon,
  Storefront as StorefrontIcon,
  StorefrontOutlined as StorefrontOutlinedIcon,
  Sync as SyncIcon,
  SyncDisabled as SyncDisabledIcon,
  Today as TodayIcon,
  TodayOutlined as TodayOutlinedIcon,
  ToggleOff as ToggleOffIcon,
  ToggleOn as ToggleOnIcon,
  X as XIcon,
  Update as UpdateIcon,
  UpdateOutlined as UpdateOutlinedIcon,
  Verified as VerifiedIcon,
  VerifiedOutlined as VerifiedOutlinedIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Warning as WarningIcon,
  WarningOutlined as WarningOutlinedIcon,
  YouTube as YouTubeIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
} from "@mui/icons-material";

import { CustomCssProps } from "@maverick/types";
import { SvgIcon } from "@mui/material";

export enum IconEnum {
  AccessTime = "AccessTime",
  AccessTimeFilled = "AccessTimeFilled",
  Accessibility = "Accessibility",
  AccountBalance = "AccountBalance",
  AccountCircle = "AccountCircle",
  AccountCircleOutlined = "AccountCircleOutlined",
  Add = "Add",
  AddCard = "AddCard",
  AddCircle = "AddCircle",
  AddCircleOutline = "AddCircleOutline",
  Alarm = "Alarm",
  AlarmOff = "AlarmOff",
  Apps = "Apps",
  ArrowBack = "ArrowBack",
  ArrowCircleDown = "ArrowCircleDown",
  ArrowCircleUp = "ArrowCircleUp",
  ArrowCircleLeft = "ArrowCircleLeft",
  ArrowCircleRight = "ArrowCircleRight",
  ArrowDropDown = "ArrowDropDown",
  ArrowDropUp = "ArrowDropUp",
  ArrowLeft = "ArrowLeft",
  ArrowRight = "ArrowRight",
  ArrowForward = "ArrowForward",
  AttachFile = "AttachFile",
  Block = "Block",
  CalendarMonth = "CalendarMonth",
  CalendarToday = "CalendarToday",
  Cancel = "Cancel",
  Check = "Check",
  CheckBox = "CheckBox",
  CheckBoxOutlineBlank = "CheckBoxOutlineBlank",
  CheckCircle = "CheckCircle",
  CheckCircleOutline = "CheckCircleOutline",
  ChevronLeft = "ChevronLeft",
  ChevronRight = "ChevronRight",
  Close = "Close",
  Comment = "Comment",
  ContentCopy = "ContentCopy",
  Create = "Create",
  Delete = "Delete",
  DeleteOutline = "DeleteOutline",
  Discount = "Discount",
  Download = "Download",
  DownloadDone = "DownloadDone",
  Edit = "Edit",
  Event = "Event",
  EventAvailable = "EventAvailable",
  ExpandLess = "ExpandLess",
  ExpandMore = "ExpandMore",
  Facebook = "Facebook",
  FacebookOutlined = "FacebookOutlined",
  Favorite = "Favorite",
  FavoriteBorder = "FavoriteBorder",
  Group = "Group",
  Help = "Help",
  HelpOutline = "HelpOutline",
  History = "History",
  Home = "Home",
  Image = "Image",
  Info = "Info",
  InfoOutlined = "InfoOutlined",
  Instagram = "Instagram",
  Language = "Language",
  LinkedIn = "LinkedIn",
  LocalGroceryStore = "LocalGroceryStore",
  LocalGroceryStoreOutlined = "LocalGroceryStoreOutlined",
  LocalOffer = "LocalOffer",
  LocalOfferOutlined = "LocalOfferOutlined",
  Lock = "Lock",
  LockOpen = "LockOpen",
  Logout = "Logout",
  Loop = "Loop",
  Mail = "Mail",
  MailOutline = "MailOutline",
  Map = "Map",
  Menu = "Menu",
  MoreHoriz = "MoreHoriz",
  MoreVert = "MoreVert",
  Notifications = "Notifications",
  NotificationsActive = "NotificationsActive",
  NotificationsNone = "NotificationsNone",
  NotificationsOff = "NotificationsOff",
  NotificationsPaused = "NotificationsPaused",
  OpenInNew = "OpenInNew",
  Payment = "Payment",
  PaymentOutlined = "PaymentOutlined",
  Person = "Person",
  PersonAdd = "PersonAdd",
  PersonOutline = "PersonOutline",
  PersonOutlineOutlined = "PersonOutlineOutlined",
  PersonPin = "PersonPin",
  PersonPinOutlined = "PersonPinOutlined",
  PinDrop = "PinDrop",
  PinDropOutlined = "PinDropOutlined",
  Place = "Place",
  PlaceOutlined = "PlaceOutlined",
  PlayArrow = "PlayArrow",
  PlayCircle = "PlayCircle",
  Print = "Print",
  PrintOutlined = "PrintOutlined",
  Public = "Public",
  PublicOutlined = "PublicOutlined",
  Refresh = "Refresh",
  Remove = "Remove",
  RemoveCircle = "RemoveCircle",
  Report = "Report",
  ReportProblem = "ReportProblem",
  ReportProblemOutlined = "ReportProblemOutlined",
  Save = "Save",
  Schedule = "Schedule",
  Search = "Search",
  Send = "Send",
  Settings = "Settings",
  Share = "Share",
  ShoppingCart = "ShoppingCart",
  ShoppingCartOutlined = "ShoppingCartOutlined",
  Sort = "Sort",
  SortByAlpha = "SortByAlpha",
  SortByAlphaOutlined = "SortByAlphaOutlined",
  SortOutlined = "SortOutlined",
  Star = "Star",
  StarBorder = "StarBorder",
  StarHalf = "StarHalf",
  Storefront = "Storefront",
  StorefrontOutlined = "StorefrontOutlined",
  Sync = "Sync",
  SyncDisabled = "SyncDisabled",
  Today = "Today",
  TodayOutlined = "TodayOutlined",
  ToggleOff = "ToggleOff",
  ToggleOn = "ToggleOn",
  X = "X",
  Update = "Update",
  UpdateOutlined = "UpdateOutlined",
  Verified = "Verified",
  VerifiedOutlined = "VerifiedOutlined",
  Visibility = "Visibility",
  VisibilityOff = "VisibilityOff",
  Warning = "Warning",
  WarningOutlined = "WarningOutlined",
  YouTube = "YouTube",
  Zebra = "Zebra",
  ZoomIn = "ZoomIn",
  ZoomOut = "ZoomOut",
}

enum IconTypeEnum {
  Mui = "Mui",
  Custom = "Custom",
}

export type IconSize = MuiIconProps["fontSize"] | number | string;

interface IconProps {
  className?: string;
  color?: string;
  icon: keyof typeof IconEnum;
  size?: IconSize;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  style?: CustomCssProps | React.CSSProperties;
}

export const Icon = ({
  className,
  color,
  icon,
  size,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  style,
}: IconProps) => {
  let IconComponent: any = null;
  let IconType = null;
  const iconSize = size || "24px";

  switch (icon) {
    case IconEnum.AccessTime:
      IconComponent = AccessTimeIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.AccessTimeFilled:
      IconComponent = AccessTimeFilledIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Accessibility:
      IconComponent = AccessibilityIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.AccountBalance:
      IconComponent = AccountBalanceIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.AccountCircle:
      IconComponent = AccountCircleIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.AccountCircleOutlined:
      IconComponent = AccountCircleOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Add:
      IconComponent = AddIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.AddCard:
      IconComponent = AddCardIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.AddCircle:
      IconComponent = AddCircleIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.AddCircleOutline:
      IconComponent = AddCircleOutlineIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Alarm:
      IconComponent = AlarmIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.AlarmOff:
      IconComponent = AlarmOffIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Apps:
      IconComponent = AppsIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ArrowBack:
      IconComponent = ArrowBackIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ArrowCircleDown:
      IconComponent = ArrowCircleDownIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ArrowCircleUp:
      IconComponent = ArrowCircleUpIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ArrowCircleLeft:
      IconComponent = ArrowCircleLeftIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ArrowCircleRight:
      IconComponent = ArrowCircleRightIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ArrowDropDown:
      IconComponent = ArrowDropDownIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ArrowDropUp:
      IconComponent = ArrowDropUpIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ArrowLeft:
      IconComponent = ArrowLeftIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ArrowRight:
      IconComponent = ArrowRightIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ArrowForward:
      IconComponent = ArrowForwardIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.AttachFile:
      IconComponent = AttachFileIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Block:
      IconComponent = BlockIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.CalendarMonth:
      IconComponent = CalendarMonthIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.CalendarToday:
      IconComponent = CalendarTodayIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Cancel:
      IconComponent = CancelIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Check:
      IconComponent = CheckIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.CheckBox:
      IconComponent = CheckBoxIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.CheckBoxOutlineBlank:
      IconComponent = CheckBoxOutlineBlankIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.CheckCircle:
      IconComponent = CheckCircleIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.CheckCircleOutline:
      IconComponent = CheckCircleOutlineIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ChevronLeft:
      IconComponent = ChevronLeftIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ChevronRight:
      IconComponent = ChevronRightIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Close:
      IconComponent = CloseIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Comment:
      IconComponent = CommentIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ContentCopy:
      IconComponent = ContentCopyIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Create:
      IconComponent = CreateIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Delete:
      IconComponent = DeleteIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.DeleteOutline:
      IconComponent = DeleteOutlineIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Discount:
      IconComponent = DiscountIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Download:
      IconComponent = DownloadIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.DownloadDone:
      IconComponent = DownloadDoneIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Edit:
      IconComponent = EditIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Event:
      IconComponent = EventIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.EventAvailable:
      IconComponent = EventAvailableIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ExpandLess:
      IconComponent = ExpandLessIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ExpandMore:
      IconComponent = ExpandMoreIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Facebook:
      IconComponent = FacebookIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.FacebookOutlined:
      IconComponent = FacebookOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Favorite:
      IconComponent = FavoriteIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.FavoriteBorder:
      IconComponent = FavoriteBorderIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Group:
      IconComponent = GroupIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Help:
      IconComponent = HelpIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.HelpOutline:
      IconComponent = HelpOutlineIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.History:
      IconComponent = HistoryIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Home:
      IconComponent = HomeIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Image:
      IconComponent = ImageIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Info:
      IconComponent = InfoIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.InfoOutlined:
      IconComponent = InfoOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Instagram:
      IconComponent = InstagramIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Language:
      IconComponent = LanguageIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.LinkedIn:
      IconComponent = LinkedInIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.LocalGroceryStore:
      IconComponent = LocalGroceryStoreIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.LocalGroceryStoreOutlined:
      IconComponent = LocalGroceryStoreOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.LocalOffer:
      IconComponent = LocalOfferIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.LocalOfferOutlined:
      IconComponent = LocalOfferOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Lock:
      IconComponent = LockIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.LockOpen:
      IconComponent = LockOpenIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Logout:
      IconComponent = LogoutIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Loop:
      IconComponent = LoopIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Mail:
      IconComponent = MailIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.MailOutline:
      IconComponent = MailOutlineIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Map:
      IconComponent = MapIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Menu:
      IconComponent = MenuIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.MoreHoriz:
      IconComponent = MoreHorizIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.MoreVert:
      IconComponent = MoreVertIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Notifications:
      IconComponent = NotificationsIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.NotificationsActive:
      IconComponent = NotificationsActiveIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.NotificationsNone:
      IconComponent = NotificationsNoneIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.NotificationsOff:
      IconComponent = NotificationsOffIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.NotificationsPaused:
      IconComponent = NotificationsPausedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.OpenInNew:
      IconComponent = OpenInNewIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Payment:
      IconComponent = PaymentIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.PaymentOutlined:
      IconComponent = PaymentOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Person:
      IconComponent = PersonIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.PersonAdd:
      IconComponent = PersonAddIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.PersonOutline:
      IconComponent = PersonOutlineIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.PersonOutlineOutlined:
      IconComponent = PersonOutlineOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.PersonPin:
      IconComponent = PersonPinIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.PersonPinOutlined:
      IconComponent = PersonPinOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.PinDrop:
      IconComponent = PinDropIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.PinDropOutlined:
      IconComponent = PinDropOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Place:
      IconComponent = PlaceIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.PlaceOutlined:
      IconComponent = PlaceOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.PlayArrow:
      IconComponent = PlayArrowIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.PlayCircle:
      IconComponent = PlayCircleIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Print:
      IconComponent = PrintIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.PrintOutlined:
      IconComponent = PrintOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Public:
      IconComponent = PublicIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.PublicOutlined:
      IconComponent = PublicOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Refresh:
      IconComponent = RefreshIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Remove:
      IconComponent = RemoveIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.RemoveCircle:
      IconComponent = RemoveCircleIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Report:
      IconComponent = ReportIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ReportProblem:
      IconComponent = ReportProblemIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ReportProblemOutlined:
      IconComponent = ReportProblemOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Save:
      IconComponent = SaveIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Schedule:
      IconComponent = ScheduleIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Search:
      IconComponent = SearchIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Send:
      IconComponent = SendIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Settings:
      IconComponent = SettingsIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Share:
      IconComponent = ShareIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ShoppingCart:
      IconComponent = ShoppingCartIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ShoppingCartOutlined:
      IconComponent = ShoppingCartOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Sort:
      IconComponent = SortIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.SortByAlpha:
      IconComponent = SortByAlphaIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.SortByAlphaOutlined:
      IconComponent = SortByAlphaOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.SortOutlined:
      IconComponent = SortOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Star:
      IconComponent = StarIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.StarBorder:
      IconComponent = StarBorderIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.StarHalf:
      IconComponent = StarHalfIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Storefront:
      IconComponent = StorefrontIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.StorefrontOutlined:
      IconComponent = StorefrontOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Sync:
      IconComponent = SyncIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.SyncDisabled:
      IconComponent = SyncDisabledIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Today:
      IconComponent = TodayIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.TodayOutlined:
      IconComponent = TodayOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ToggleOff:
      IconComponent = ToggleOffIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ToggleOn:
      IconComponent = ToggleOnIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.X:
      IconComponent = XIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Update:
      IconComponent = UpdateIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.UpdateOutlined:
      IconComponent = UpdateOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Verified:
      IconComponent = VerifiedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.VerifiedOutlined:
      IconComponent = VerifiedOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Visibility:
      IconComponent = VisibilityIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.VisibilityOff:
      IconComponent = VisibilityOffIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Warning:
      IconComponent = WarningIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.WarningOutlined:
      IconComponent = WarningOutlinedIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.YouTube:
      IconComponent = YouTubeIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Zebra:
      IconComponent = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2500"
          height="2500"
          viewBox="0 0 192.756 192.756"
          fill="currentColor"
        >
          <g fillRule="evenodd" clipRule="evenodd">
            <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
            <path d="M67.813 59.343c2.447-1.596 6.277 2.128 8.192.532 2.021-1.595.106-5.212 1.276-7.127.426-.852 1.915-.319 2.766 0 .745.213 1.383.532 1.915.744.638.32 1.277.532 1.809.532s.851-.425.958-.638c.958-1.809 1.064-3.831 1.596-5.64.106-.425.639-.531.958-.318 1.596.744 3.617 3.724 4.363 2.447.851-1.383 1.383-2.979 1.701-4.575.319-2.234.319-4.468.213-6.703 0-.106-.106-.319-.213-.425-1.489-1.17-9.042 2.234-9.788 2.66-.532.318-1.064.531-1.596.851-5 2.873-9.788 5.958-14.15 9.469-.851.744-5.852 5.213-8.192 8.191-1.063 1.383-1.595 2.34-1.17 2.766.426.32.746.639 1.17.852 1.17.851 2.34 1.702 3.511 2.34 10.32 5.107.745-3.298 4.681-5.958z" />
            <path d="M101.219 92.217c-2.234-4.575-5.212-8.617-7.873-12.979-2.979-4.788-5.745-9.788-7.021-15.853-.426-2.234.958-11.595-3.404-5-.319.425-.639.957-.958 1.383-.852 1.596-1.596 3.085-2.234 4.575-2.766 6.702-2.873 15-.319 21.916a42.403 42.403 0 0 0 2.553 5.426c3.192 5.533 7.447 10.426 11.383 15.744 3.085 4.256 5.958 8.938 7.66 14.469.107.213.213.533.213.746.533 2.234.426 4.256 1.064 6.17.107.426.852-.318.957-.639 2.021-6.914 2.34-15.426 1.916-22.553-.426-5.106-1.916-9.362-3.937-13.405z" />
            <path d="M93.346 122.432c-3.617-3.936-7.66-7.873-11.383-12.021a62.872 62.872 0 0 1-6.596-8.512c-4.894-7.873-4.468-14.681-3.723-23.831 0-.532 2.446-12.661 1.17-12.235-4.788 1.703-9.575 14.256-10.639 18.512-4.042 17.023.957 31.597 12.873 43.513 2.766 2.766 5 5.213 6.916 7.447 5.638 6.594 8.192 12.02 11.383 21.383.639 2.021 1.276 4.148 2.022 6.596.212.426.638.531.638.531a10.655 10.655 0 0 0 2.234-2.764c1.277-2.342 2.234-4.469 2.979-6.598 2.979-7.979 2.447-14.467 0-20.213-1.81-4.256-4.681-8.086-7.874-11.808zM56.536 64.663c-.639-.318-1.17-.425-1.809-.213-.958.32-1.808 1.49-2.554 2.341-1.276 1.809-4.361 4.042-3.084 5.319.638.745 3.191 1.596 5.638 2.233 1.809.533 3.618.852 4.894.852.426-.105.746-.105 1.064-.213.319-.212-.212-2.659-1.064-5.106-.957-2.341-2.127-4.788-3.085-5.213zM107.283 92.749c1.064-2.234 1.703-4.893 2.021-7.554.213-1.808.32-3.724 0-5.532 0-.319-.105-.638-.105-.958-1.385-7.021-4.15-13.724-5.639-20.319-1.277-5.426 2.871-10.319 1.275-15.64-.957-2.979-2.66-5.212-3.191-7.872-.105-.958.107-1.915.639-2.234.639-.213 1.064.425 1.277.637 1.383 1.809 2.127 3.725 3.404 5.001 1.275 1.276.744-7.766.637-8.086-.318-1.915-.637-3.936-1.596-5.638-1.062-2.021-2.871-3.085-4.787-3.405-3.51-.425-7.234 1.916-7.66 6.171a12.17 12.17 0 0 0 .319 4.787c.531 2.234 1.809 4.043 2.447 5.958.745 2.127.958 5.213.319 7.447-.852 2.979-2.447 5.532-3.085 8.191-.106.319-.213.639-.213.958-.425 2.127-.425 4.362-.106 6.17 0 .212 0 .426.106.532.532 3.084 1.276 6.064 2.341 8.936 1.489 3.937 3.831 7.554 5.532 11.383.32.532.533 1.17.744 1.703 1.49 3.723 2.023 7.234 3.193 10.639.533 1.598 1.915-.637 2.128-1.275zM126.113 55.194c-2.447-1.595-3.936 1.383-3.191 5.001.32 1.383 1.172 2.553 1.596 3.51.32.532.959.745 1.596.745 1.277 0 2.66-.531 3.086-1.383.957-1.808-.107-4.468-1.277-5.958-.64-.851-1.171-1.489-1.81-1.915z" />
            <path d="M132.816 16.15c-2.129-1.063-4.363-1.915-6.703-2.766-5.318-1.915-10.957-3.298-16.809-4.148-2.66-.426-5.318-.746-8.086-.852-1.596-.107-3.191-.107-4.787-.107h-3.085c-3.829.107-7.66.532-11.383 1.17a83.955 83.955 0 0 0-22.342 6.915c-1.702.745-3.297 1.489-4.894 2.341C27.067 33.598 8.13 62.961 8.13 96.473c0 33.619 18.937 62.875 46.597 77.77 1.596.852 3.192 1.703 4.894 2.447a92.49 92.49 0 0 0 22.342 6.914c2.447.318 4.788.639 7.234.852 2.66.213 3.724-.959 4.149-2.66.319-1.596.106-3.617 0-5.426v-.424c-.531-7.129-5.532-15.746-11.383-23.832-7.234-9.893-15.852-19.148-19.15-23.938a182.023 182.023 0 0 1-3.192-5.105 52.215 52.215 0 0 1-4.894-10.639c-1.808-6.064-2.234-12.342-1.915-20.214.213-5.426 2.234-7.766 0-12.234-.957-2.021-1.702-3.83-3.085-5.001-.958-.851-2.235-.531-3.192-.318-1.596.426-3.511 4.468-4.042 5.957-.638 1.49-2.127 3.937-.958 4.362 1.063.319 11.809-1.383 10.32 1.277-17.448 31.916-7.553 48.406 2.872 61.172 1.703 2.021 3.298 3.83 4.894 5.746 4.681 5.639 8.724 10.957 9.043 17.127.213 3.299.213 5.107-4.043 3.299-1.702-.744-3.404-1.488-5-2.34-1.702-.744-3.297-1.596-4.894-2.555-24.894-14.469-41.704-41.383-41.704-72.236 0-30.746 16.81-57.768 41.704-72.237 1.596-.958 3.192-1.809 4.894-2.553 6.916-3.511 14.469-5.958 22.342-7.341a100.837 100.837 0 0 1 11.383-1.276h3.085c1.596 0 3.191 0 4.787.106 2.768.213 5.426.426 8.086.851 5.852.958 11.49 2.447 16.809 4.469 2.34.957 4.574 1.915 6.703 2.979 27.873 13.511 47.023 42.13 47.023 75.003 0 11.277-1.703 21.277-5.959 30.959-8.51 19.576-23.512 30.107-41.064 37.127-2.129.852-4.363 1.703-6.703 2.447-5.426 1.918-11.064 3.514-16.809 5.109-.105 0-.213.105-.318.105-1.172.318-1.809.531-2.66 6.064-.852 5.426-.533 6.062 2.979 5.533.213 0 .32-.107.426-.107 5.639-.852 11.17-2.234 16.383-4.15 2.34-.852 4.574-1.703 6.703-2.66 30.533-13.938 51.809-44.787 51.809-80.428-.001-35.641-21.276-66.387-51.81-80.324z" />
            <path d="M143.348 84.664c-2.553 1.383-6.49.213-9.148 2.233-.957.745-.744 4.043-.32 5 .852 1.596 2.555 2.128 3.512 3.085 1.277 1.49 1.703 3.511 3.086 4.681.957.852 5.213 2.766 6.277.957 3.51-5.851 4.893-3.615 9.041-7.872 2.234-2.128-1.062-15.106-4.359-17.128-2.555-1.702-5.961-1.702-7.768-3.83-1.809-1.916-1.383-5-2.234-7.128-1.064-2.659-1.916-5.212-3.191-7.553-1.385-2.873-3.299-4.894-5.426-6.596-2.234-1.915-4.682-3.404-6.703-5.319-.957-.958-1.809-1.916-2.553-3.086-2.342-4.042.213-12.447-3.086-15-2.34-1.915-5.957 1.17-6.596 3.405-1.277 4.787-3.83 11.064-4.574 16.916a21.339 21.339 0 0 0 0 5.213c.213 1.383.533 2.66 1.17 3.83 1.383 3.192 3.297 6.17 4.682 9.043.531 1.17.531 2.554.318 3.83-1.062 4.362-2.66 4.362-4.467 7.766-.426.958-.639 2.021-.213 2.873 3.084 6.17 9.041 7.766 15.318 7.659 1.277 0 2.447 0 3.723-.212.426 0 .959-.213.959-.533 0-3.936-.32-2.553-2.553-4.787-.746-.745-1.383-1.49-1.49-2.128-.318-.852-.426-1.703-.639-2.553-.318-1.809-.531-3.618-.957-5.32a38.823 38.823 0 0 0-2.234-5.958c-1.383-2.872-3.191-5.425-4.043-8.404-1.596-6.17.426-8.724 6.598-7.554.213.107.424.107.637.213 1.064.319 1.809.958 2.447 1.384 1.488 1.063 2.66 2.021 3.51 3.084.32.532.533.958.746 1.383.426.639.639 1.17.744 1.809.744 2.128 1.277 4.042 1.596 5.958.318 1.808.426 3.405.318 5-.211 2.446-.957 4.681-.957 6.915 0 4.681 5.215-.106 6.598-.319 2.34-.426 3.936 4.468 3.723 5.958-.11 1.382-.641 2.552-1.492 3.085z" />
          </g>
        </svg>
      );
      IconType = IconTypeEnum.Custom;
      break;
    case IconEnum.ZoomIn:
      IconComponent = ZoomInIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ZoomOut:
      IconComponent = ZoomOutIcon;
      IconType = IconTypeEnum.Mui;
      break;
    default:
      IconComponent = null;
      IconType = null;
      break;
  }

  if (IconComponent && IconType === IconTypeEnum.Mui) {
    return (
      <IconComponent
        className={className}
        sx={{
          color: color || "inherit",
          fontSize: iconSize,
          marginTop: marginTop !== null ? marginTop : 0,
          marginBottom: marginBottom !== null ? marginBottom : 0,
          marginRight: marginRight !== null ? marginRight : 0,
          marginLeft: marginLeft !== null ? marginLeft : 0,
          pointerEvents: "none",
          ...style,
        }}
      />
    );
  }

  if (IconComponent && IconType === IconTypeEnum.Custom) {
    return (
      <SvgIcon
        className={className}
        sx={{
          color: color || "inherit",
          fontSize: iconSize,
          marginTop: marginTop !== null ? marginTop : 0,
          marginBottom: marginBottom !== null ? marginBottom : 0,
          marginRight: marginRight !== null ? marginRight : 0,
          marginLeft: marginLeft !== null ? marginLeft : 0,
          pointerEvents: "none",
          ...style,
        }}
      >
        {IconComponent}
      </SvgIcon>
    );
  }

  return null;
};
