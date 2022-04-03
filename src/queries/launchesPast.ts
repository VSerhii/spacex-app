export const launchesPastQuery = `
	query launchesPast($offset: Int $limit: Int){
		launchesPast(offset:$offset limit:$limit) {
			mission_name
			launch_date_local
			launch_site {
				site_name_long
			}
			links {
				article_link
				video_link
			}
			rocket {
				rocket_name
				first_stage {
					cores {
						flight
						core {
							status
						}
					}
				}
			}
			launch_success
		}
	}
`;