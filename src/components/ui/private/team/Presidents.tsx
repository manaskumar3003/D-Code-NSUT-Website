function President() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center gap-10 px-6 md:px-12 xl:px-32">
        <div className="text-center">
          <h2 className="text-center mb-4 text-2xl text-gray-900 font-bold md:text-4xl">Meet our Team</h2>
          <p className="text-gray-600 lg:w-8/12 lg:mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus recusandae tempora sunt eveniet earum est praesentium omnis eos amet molestiae sint possimus, distinctio neque, obcaecati, ipsa architecto eum quae quidem dignissimos quod illum quia consequatur aliquid nulla. Voluptas reprehenderit dignissimos vel cumque quibusdam non ea?</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-12 lg:gap-16 items-center">
          <div className="space-y-4 text-center order-2 sm:order-1">
            <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-48 lg:w-64 lg:h-64"
              src="https://mighty.tools/mockmind-api/content/human/38.jpg" alt="woman" width="1000" height="667" />
              <div>
              <a href="https://www.linkedin.com/in/yashi-pitti-19023423a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADt6hvwBewa_RLF6XjBzeKiXDhUFfY750hk&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BoxETLQsPTey6cdzlTm61Qg%3D%3D" target="_blank" className="text-2xl font-bold">Yashi Pitti</a>
              <span className="block text-sm text-gray-500">Vice-President</span>
            </div>
          </div>
          <div className="space-y-4 text-center sm:order-1">
            <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
              src="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/396156480_748355840446940_1302335004003743244_n.jpg?ccb=11-4&oh=01_Q5AaIOeBGYdxgaqEYpHLpdnWEDY5lrlUyXJwqsG1LKv7Yn6M&oe=665C2884&_nc_sid=e6ed6c&_nc_cat=107"  alt="man" width="1000" height="667" />
            <div>
              <a href="https://www.linkedin.com/in/anshul-goyal-a9b537254?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD66JFcBl9RnrmvNTULJfwv4pdySAsSUFDw&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B6Hphmv6hS%2B2t9RPuP1Q9mQ%3D%3D" target="_blank" className="text-2xl font-bold">Anshul Goyal</a>
              <span className="block text-sm text-gray-500">President</span>
            </div>
          </div>
          <div className="space-y-4 text-center order-2 sm:order-1">
            <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-48 lg:w-64 lg:h-64"
              src="https://mighty.tools/mockmind-api/content/human/9.jpg" alt="woman" width="1000" height="667" />
            <div>
            <a href="https://www.linkedin.com/in/muskan-gupta-96028b251?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD4nv5gB5zgpVmHsBSHNuq8CfRAAXoqnk94&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BEqXEbFcXR%2Fma6wHqJfKFZg%3D%3D" target="_blank" className="text-2xl font-bold">Muskan Gupta</a>
              <span className="block text-sm text-gray-500">Vice-President</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default President;
