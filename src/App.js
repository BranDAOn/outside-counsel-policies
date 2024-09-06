import React, {useState, useRef} from 'react';
import html2pdf from 'html2pdf.js';

const CouncilGuidelines = () => {
	const [formData, setFormData] = useState({
		companyName: 'Name-of-your-company',
	});

	const contentRef = useRef(null);

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setFormData(prevState => ({
			...prevState, [name]: value
		}));
	};

	const generatePDF = () => {
		const content = contentRef.current;
		const pdfContent = content.cloneNode(true);

		pdfContent.querySelectorAll('input, select').forEach(input => {
			const span = document.createElement('span');
			span.textContent = input.value;
			input.parentNode.replaceChild(span, input);
		});

		pdfContent.querySelectorAll('button').forEach(button => {
			button.remove();
		});

		pdfContent.querySelectorAll('.pdf-exclude').forEach(el => {
			el.remove();
  		});

		const opt = {
			margin: 15,
			filename: 'outside_counsel_guidelines.pdf',
			image: { type: 'jpeg', quality: 0.98 },
			html2canvas: { scale: 2 },
			jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', compress: true }
		};

		html2pdf().from(pdfContent).set(opt).save();
	};
		
	return (<div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
		<div ref={contentRef} className="pdf-content">
			<h1 className="text-3xl font-bold mb-6 text-center"><input
				type="text"
				name="companyName"
				value={formData.companyName}
				onChange={handleInputChange}
				placeholder="[Name-of-your-Company]"
				className="border-b border-gray-300 focus:border-blue-500 outline-none"
			/>OUTSIDE COUNSEL POLICY</h1>
		
			<h2 className="text-2xl font-bold mt-6 mb-4 avoid-break text-left">1. Introduction</h2>
		
			<p className="mb-4 avoid-break">
				At <input
				type="text"
				name="companyName"
				value={formData.companyName}
				onChange={handleInputChange}
				placeholder="[Name-of-your-Company]"
				className="border-b border-gray-300 focus:border-blue-500 outline-none"
			/> ("<u>we</u>," "<u>us</u>," or "<u>our</u>"), we are committed to
				ensuring that all legal work is conducted with the utmost
				professionalism, efficiency, and integrity. We expect the same standards of
				excellence from our outside counsel ("<u>Outside Counsel</u>"). Our Outside
				Counsel partners must share our core values, which include
				accountability for results, transparency, innovation in problem-solving,
				and a focus on delivering the highest quality service while maintaining
				strong ethical standards.
			</p>

			<p className="mb-4 avoid-break">
				To maintain these standards, we developed a comprehensive set of billing
				guidelines. These guidelines are designed to ensure that our Outside
				Counsel provide services efficiently, avoid unnecessary expenses, and
				maintain detailed and accurate billing practices. In addition, these
				guidelines help us ensure that Outside Counsel's staffing, budgeting,
				and resource management align with our expectations of cost-efficiency
				and professionalism.
     		</p>

			 <p className="mb-4 avoid-break">
				These guidelines apply to all legal matters unless otherwise agreed upon
				in writing. By engaging with us, Outside Counsel agrees to abide by
				these guidelines. Failure to comply may result in adjustments or
				rejection of submitted invoices and, if necessary, termination of the
				working relationship.
    		</p>

			<h2 className="text-2xl font-bold mt-6 mb-4 avoid-break text-left">2. Scope and Application</h2>

			<p className="mb-4 avoid-break">
				These Billing Guidelines outline our expectations for Outside Counsel in
				key areas such as:
      		</p>

			<ul className="list-disc pl-8 mb-4 avoid-break">
				<li>Timekeeping and Billing Practices</li>
				<li>Staffing and Team Composition</li>
				<li>Expense Management</li>
				<li>Invoicing Procedures</li>
				<li>Record Keeping</li>
				<li>Compliance with Applicable Laws and Ethical Standards</li>
      		</ul>

			<p className="mb-4 avoid-break">
				All members of Outside Counsel's team must be familiar with and adhere
				to these guidelines when providing services to us. Any deviation from
				these standards must be pre-approved in writing by our legal team or
				your primary contact with our business. These guidelines, along with any
				relevant laws, regulations, or engagement letters, constitute the full
				agreement between us and Outside Counsel.
     		</p>

			<h2 className="text-2xl font-bold mt-6 mb-4 avoid-break text-left">3. Timekeeping and Billing Practices</h2>

			<h3 className="font-bold mt-6 mb-4 avoid-break text-left">3.1 Detailed Time Entries</h3>

			<ul className="list-disc pl-8 mb-4 avoid-break">
        			<li>
					Time entries must be recorded in increments of 0.1 hours (6-minute
					intervals) with detailed descriptions of the work performed.
					Descriptions such as "work on matter," "attention to," "regarding
					same," "correspondence," "emails," or "calls" are insufficient
					(unless the underlying issues are particularly sensitive, in which
					case, please seek pre-approval prior to vague billing in an effort
					to avoid sensitive information becoming discoverable through
					timesheets). Each entry must specify the nature and purpose of the
					task to allow for comprehensive review and approval.
        			</li>
				<li>
					Block billing, or grouping multiple tasks into one time entry, is
					strictly prohibited. Each task must be separately itemized.
				</li>
				<li>
					Time should be billed by the individual who performed the work.
					Billing for administrative or clerical work, such as scheduling
					meetings or organizing files, is not permitted.
				</li>
			</ul>

			<h3 className="font-bold mt-6 mb-4 avoid-break text-left">3.2 Billing for Meetings, Calls, and Emails</h3>

			<ul className="list-disc pl-8 mb-4 avoid-break">
				<li>
					Meetings, phone calls, or email correspondences should involve only
					those attorneys whose presence is necessary and who contribute
					substantively to the matter.
				</li>
				<li>
					More than two attorneys from the same practice group at the same
					firm attending the same meeting, call, or event requires prior
					approval from us.
				</li>
				<li>
					In general, we expect Outside Counsel to minimize overstaffing,
					particularly on routine matters, and duplicate billing for internal
					team discussions will not be reimbursed unless pre-approved.
				</li>
			</ul>

			<h2 className="text-2xl font-bold mt-6 mb-4 avoid-break text-left">4. Staffing and Resource Management</h2>

      		<h3 className="font-bold mt-6 mb-4 avoid-break text-left">4.1 Staffing Efficiency</h3>

			<ul className="list-disc pl-8 mb-4 avoid-break">
        			<li>
					Outside Counsel is expected to staff matters efficiently, using the
					most cost-effective timekeepers for each task. Partners should focus
					on high-level strategy and complex legal matters, while routine
					tasks should be delegated to associates or paralegals where
					appropriate.
        			</li>
        			<li>
					Any assignment of more than two attorneys on a matter requires
					pre-approval, and billing for overlapping efforts by multiple
					attorneys will be closely scrutinized.
        			</li>
			</ul>

			<h3 className="font-bold mt-6 mb-4 avoid-break text-left">4.2 Prohibited Billing for Administrative Roles</h3>

			<ul className="list-disc pl-8 mb-4 avoid-break">
        			<li>
					We will not pay for the time of clerks, secretaries, word
					processors, librarians, internal couriers, law clerks, summer
					associates, or other administrative staff. These roles are
					considered part of the law firm's overhead.
        			</li>
     		</ul>

			<h3 className="font-bold mt-6 mb-4 avoid-break text-left">4.3 Use of Experts, Consultants, and Vendors</h3>

			<ul className="list-disc pl-8 mb-4 avoid-break">
				<li>
				The use of third-party experts, consultants, or additional outside
				counsel must be pre-approved by us in writing. If approval is
				granted, their fees must be passed through at cost with no mark-up.
				Any third-party fees should be itemized clearly on invoices,
				detailing the services rendered.
				</li>
			</ul>

			<h2 className="text-2xl font-bold mt-6 mb-4 avoid-break text-left">5. Expense Management</h2>

			<h3 className="font-bold mt-6 mb-4 avoid-break text-left">5.1 Travel and Related Expenses</h3>

			<ul className="list-disc pl-8 mb-4 avoid-break">
				<li>
				Pre-approval is required for all travel. Travel expenses should be
				kept to a minimum, and where possible, virtual meetings should
				replace in-person attendance.
				</li>
				<li>
				Economy class airfare is the standard for all flights, and
				accommodations should be reasonable and aligned with standard
				business rates. Business class airfare may only be approved for
				international flights over 8 hours in duration.
				</li>
				<li>
				Non-reimbursable travel expenses include in-flight entertainment or
				Wi-Fi, personal phone calls, laundry, or other incidental personal
				expenses.
				</li>
			</ul>

			<h3 className="font-bold mt-6 mb-4 avoid-break text-left">5.2 Disallowed Expenses</h3>

			<p className="mb-4 avoid-break">We will not reimburse the following expenses:</p>

			<ul className="list-disc pl-8 mb-4 avoid-break">
				<li>Internal copying or printing fees.</li>
				<li>Courier services between offices.</li>
				<li>Office supplies, meals, or any other standard administrative overhead.</li>
				<li>
				Charges for online research services such as Westlaw, LexisNexis, or
				PACER unless directly related to the matter and pre-approved.
				</li>
				<li>Mark-ups on third-party vendor services.</li>
			</ul>

			<h2 className="text-2xl font-bold mt-6 mb-4 avoid-break text-left">6. Invoicing Procedures</h2>

			<h3 className="font-bold mt-6 mb-4 avoid-break text-left">6.1 Invoice Submission</h3>

			<ul className="list-disc pl-8 mb-4 avoid-break">
				<li>
				Invoices must be submitted monthly and no later than 30 days after
				the month in which the services were provided. We will endeavor to
				pay bills within 30 days of receipt of invoices.
				</li>
				<li>
				Each invoice must include a detailed breakdown of the work
				performed, the individual performing the work, the time spent, the
				billing rate, and a description of expenses.
				</li>
				<li>
				Invoices with insufficient detail or those that do not comply with
				these guidelines may be rejected or returned for revision.
				</li>
			</ul>

			<h3 className="font-bold mt-6 mb-4 avoid-break text-left">6.2 Invoice Requirements</h3>

			<p className="mb-4 avoid-break">Invoices must include:</p>

			<ul className="list-disc pl-8 mb-4 avoid-break">
				<li>A unique invoice number.</li>
				<li>Specific date and time entries for each task performed.</li>
				<li>
				A description of each task performed, broken down by activity, with
				no block billing.
				</li>
				<li>The name, role, and hourly rate of each timekeeper.</li>
				<li>
				A breakdown of expenses with itemized descriptions and receipts
				where applicable.
				</li>
			</ul>

			<h3 className="font-bold mt-6 mb-4 avoid-break text-left">6.3 Budget Monitoring and Updates</h3>

			<p className="mb-4 avoid-break">
				Invoices and charges that conform to this Policy will be processed for
				payment. Invoices or charges that do not conform to this Policy and do
				not contain the information outlined in Sections 3.1 and 6.2 may be
				returned to Outside Counsel, in whole or in part, for correction.
				Additional reasons for which invoices may be returned include, without
				limitation:
			</p>

			<ul className="list-disc pl-8 mb-4 avoid-break">
				<li>Incorrect format;</li>
				<li>Mathematical error;</li>
				<li>Non-reimbursable expenses (see Section 5);</li>
				<li>Incorrect rates or discounts;</li>
				<li>Block-billed charges;</li>
				<li>Duplicate invoice or invoice number;</li>
				<li>Future invoice date;</li>
				<li>Charge date is in the future;</li>
				<li>Unapproved rate for timekeeper;</li>
				<li>Inappropriate or overstaffed calls, meetings, or the production of work product;</li>
				<li>Invoice not submitted in a timely manner</li>
			</ul>

			<p className="mb-4 avoid-break">For example, an invoice containing the following entry will be returned (unless pre-approved):</p>
			<table className="min-w-full border-collapse border border-gray-300">
				<thead>
					<tr className="bg-gray-100">
						<th className="py-2 px-4 border border-gray-300 font-semibold text-left">Hours</th>
						 <th className="py-2 px-4 border border-gray-300 font-semibold text-left">Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="py-2 px-4 border border-gray-300 align-top">1.5</td>
						<td className="py-2 px-4 border border-gray-300">
							Call with client re ongoing matters; review revised draft of
							client agreement and related documentation; correspondence
							regarding same
						</td>
					</tr>
				</tbody>
			</table>

			<p className="mb-4 avoid-break">An acceptable method to enter the time entry would be:</p>
			<table>
				<thead>
				<tr>
					<th>Hours</th>
					<th>Description</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>1.5</td>
					<td>
					Call with client to discuss ongoing matters (.5); reviewed
					revised draft of client agreement indemnification provision
					(.3); drafted email to client to discuss merits of revisions
					to client agreement and indemnification (.7)
					</td>
				</tr>
				</tbody>
			</table>

			<h3 className="font-bold mt-6 mb-4 avoid-break text-left">6.4 Budget Monitoring and Updates</h3>

			<p className="mb-4 avoid-break">
				For large-scale or ongoing matters, Outside Counsel is expected to
				provide detailed budgets. Deviations from the agreed budget exceeding
				10% must be discussed with us and approved in advance in writing. Budget
				updates should be provided periodically to avoid surprises and ensure
				that costs align with expectations.
			</p>

			<h2 className="text-2xl font-bold mt-6 mb-4 avoid-break text-left">7. Compliance and Ethical Standards</h2>

			<h3 className="font-bold mt-6 mb-4 avoid-break text-left">7.1 Confidentiality and Data Security</h3>

			<p className="mb-4 avoid-break">
				Outside Counsel will have access to confidential and proprietary
				information during the course of representation. All such information
				must be handled with the highest levels of security and care. Any breach
				of confidentiality will be grounds for termination of the engagement and
				may result in further legal action.
			</p>

			<h3 className="font-bold mt-6 mb-4 avoid-break text-left">7.2 Compliance with Laws</h3>

			<p className="mb-4 avoid-break">
				Outside Counsel must comply with all applicable laws, including
				anti-corruption laws, data protection laws (such as GDPR), and
				regulations related to conflict of interest and financial transparency.
			</p>

			<h3 className="font-bold mt-6 mb-4 avoid-break text-left">7.3 Conflicts of Interest</h3>

			<p className="mb-4 avoid-break">
				Prior to accepting any engagement, Outside Counsel must perform a
				thorough conflict check. Any conflicts must be immediately disclosed to
				us, and a resolution must be reached before representation continues.
			</p>

			<h2 className="text-2xl font-bold mt-6 mb-4 avoid-break text-left">8. Enforcement and Modifications</h2>

			<p className="mb-4 avoid-break">
				We reserve the right to audit any invoices or time records to ensure
				compliance with these guidelines. If any discrepancies are found, we may
				request revisions or reject invoices entirely. Additionally, we reserve
				the right to modify these Billing Guidelines at any time, with notice
				provided to Outside Counsel.
			</p>
			
			<p className="mb-4 avoid-break">
				These guidelines are designed to ensure transparency, accountability,
				and efficiency in all legal matters. We expect our Outside Counsel to
				uphold these standards, and failure to do so may result in the
				termination of the engagement.
			</p>

		</div>

		<button
			onClick={generatePDF}
			className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
		>
			Generate PDF
		</button>
	</div>)
		;
};

export default CouncilGuidelines;
