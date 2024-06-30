// src/components/DonateUs.js

import React from "react";

const DonateUs = () => {
	return (
		<div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
					Support Our Cause
				</h1>
				<p className="text-xl text-center text-gray-600 mb-12">
					Your generous donation helps us continue our mission of empowering
					communities and changing lives.
				</p>

				<div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
					<div className="px-6 py-8">
						<h2 className="text-2xl font-semibold text-gray-800 mb-4">
							For Donors in India
						</h2>
						<div className="space-y-4">
							<InfoItem label="Account Name" value="[Your NGO Name]" />
							<InfoItem label="Bank Name" value="[Bank Name]" />
							<InfoItem label="Account Number" value="XXXXXXXXXX" />
							<InfoItem label="IFSC Code" value="XXXXXXXX" />
							<InfoItem label="Branch" value="[Branch Name]" />
						</div>
					</div>
				</div>

				<div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
					<div className="px-6 py-8">
						<h2 className="text-2xl font-semibold text-gray-800 mb-4">
							For International Donors
						</h2>
						<div className="space-y-4">
							<InfoItem label="Account Name" value="[Your NGO Name]" />
							<InfoItem label="Bank Name" value="[Bank Name]" />
							<InfoItem label="Account Number" value="XXXXXXXXXX" />
							<InfoItem label="SWIFT Code" value="XXXXXXXX" />
							<InfoItem label="Bank Address" value="[Full Bank Address]" />
						</div>
					</div>
				</div>

				<div className="text-center">
					<p className="text-gray-600 mb-4">
						For any queries related to donations, please contact us at:
					</p>
					<p className="text-blue-600 font-semibold">
						donations@yourngoemail.org
					</p>
				</div>
			</div>
		</div>
	);
};

const InfoItem = ({ label, value }) => (
	<div className="flex justify-between border-b border-gray-200 py-2">
		<span className="font-medium text-gray-600">{label}:</span>
		<span className="text-gray-800">{value}</span>
	</div>
);

export default DonateUs;
