export interface BannerMessage {
  id: number;
  message: string;
  link: string;
  isActive?: boolean;
}

export const fetchBannerMessages = () => new Promise<BannerMessage[]>((res) => res([{
  id: 1,
  message: 'We are having issues with our candidates, we will update you soon.',
  link: 'http://google.com'
}]));
