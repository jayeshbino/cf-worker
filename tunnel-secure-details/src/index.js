/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request) {
		var country = request.cf.country;
        var country_lower = country.toLowerCase();

		var epoch = Date.now()
		var time = new Date(epoch);

		const { headers } = request;
		const cfaccessemail = headers.get("cf-access-authenticated-user-email");

		const html = `<!DOCTYPE html>
		<body>
		  <h4>Country: ${country}</h4>
		  <h4>Time: ${time}</h4>
		  <h4>User-ID: ${cfaccessemail}</h4>
		  <a href="https://tunnel.ja-ed.online/secure/sites/${country_lower}.png" target="_blank">Link to the regional site</a>
		</body>`;

		await fetch(request)
		
		return new Response(html, {
		 headers: {
				  "content-type": "text/html;charset=UTF-8",
				},
			});
	},
};