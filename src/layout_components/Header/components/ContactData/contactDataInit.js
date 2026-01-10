export function contactDataLogic() {
	const share_list = document.querySelector("[share-list]");

	share_list.onclick = ()=> {
		if (navigator.share) {
			navigator.share({
				title: "Nikko shrines and temples",
				url: "https://www.nikko_adventures.com"
			}).catch(console.error);
		}
	}
}